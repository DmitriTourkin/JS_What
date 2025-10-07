function wrapper(delay, maxBatchSize = 10) {
  let batch = [];
  let pendingResolvers = [];
  let timeoutId = null;
  let lastCall = null;

  return function batchedRequest(requestFn) {
    return new Promise((r, j) => {
      const currentTime = Date.now();
      batch.push(requestFn);
      pendingResolvers.push({ r, j });

      lastCall = currentTime;

      if (batch.length >= maxBatchSize) {
        executeBatch();
        return;
      }

      if (!timeoutId) {
        timeoutId = setTimeout(executeBatch, delay);
      }
    })

    async function executeBatch(fetchesArg) {
      if (batch.length === 0) return;

      const currentBatch = [...batch];
      const currentResolvers = [...pendingResolvers];

      batch = [];
      pendingResolvers = [];
      clearTimeout(timeoutId);
      timeoutId = null;

      try {
        const results = await Promise.allSettled(currentBatch.map(fn => fn()));

        results.forEach((result, index) => {
          if (result.status === 'fulfilled') {
            currentResolvers[index].resolve(result.value);
          } else {
            currentResolvers[index].reject(result.reason);
          }
        });
      } catch (e) {
        currentResolvers.forEach(resolver => {
          resolver.reject(error);
        })
      }
    };
  }
}