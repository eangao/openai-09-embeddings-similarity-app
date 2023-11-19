const getEmbedding = async (text, model = "text-embedding-ada-002") => {
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  await delay(2000);
  return [0.5, 0.5, 0.5];
};

module.exports = getEmbedding;
