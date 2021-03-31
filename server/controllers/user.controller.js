exports.getUserNicknameController = async (req, res) => {

  const userNickname = req.profile.nickname

  return res.code(200).send({nickname: userNickname})
}