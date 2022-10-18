export default function validate({ username, title, content }) {
  const errors = {};

  if (!username) {
    errors.username = "이메일이 입력되지 않앗습니다.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(username)) {
    errors.username = "입력된 이메일이 유효하지 않습니다.";
  }

  if (!title) {
    errors.title = "비밀번호가 입력되지 않았습니다.";
  } else if (title.length < 8) {
    errors.title = "8자 이상의 패스워드를 사용해야 합니다.";
  }
  if (!content) {
    errors.content = "비밀번호가 입력되지 않았습니다.";
  } else if (content.length < 8) {
    errors.content = "8자 이상의 패스워드를 사용해야 합니다.";
  }

  return errors;
}
