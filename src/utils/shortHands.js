export const delayFor = async (wait = 1000) =>
  await new Promise(resolve => setTimeout(resolve, wait));
