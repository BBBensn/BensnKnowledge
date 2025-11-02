module.exports = async (tp) => {
  const tech = await tp.user.prompt("Tech-Stack (manuell eingeben):");
  return tech || "unspecified";
};
