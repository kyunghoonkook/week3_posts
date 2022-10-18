import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { __addPost } from "../redux/modules/postsSlice";
import validate from "./validate";

// 초깃값과 addPost할 thunk함수를 준다.
function useForm({ initialValues, onSubmit, __addPost }) {
  const dispatch = useDispatch();
  // values를 초깃값으로 세팅
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // input값에 변화가 발생하면 setValues에 변화를 반영
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  // submit된다면
  const handleSubmit = async (event) => {
    setSubmitting(true);
    event.preventDefault();
    // 값을 dispatch해준다.
    dispatch(__addPost({ ...values, createdAt: new Date().getTime() }));
    // 요거는 뭔지 모르겠음.
    await new Promise((r) => setTimeout(r, 1000));

    setErrors(validate(values));

    // 다시 초기값으로 세팅
    // setValues(initialValues);
  };

  useEffect(() => {
    // submit이 되어서 submitting값이 true가 된다면
    if (submitting) {
      // 위에 validate로 검증해서 바뀐 errors 객체의 key값이 없으면 onSubmit에 값을 넣어준다.
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
      }
      // error여부를 확인하면 submitting값을 false로 바꿔준다.
      setSubmitting(false);
    }
    // error값이 변동이 있을시 useEffect실행.
  }, [errors]);

  return {
    values,
    errors,
    submitting,
    handleChange,
    handleSubmit,
  };
}

export default useForm;

// function useForm({ initialValues, onSubmit, validate })
///////////////////////////////////
// const [postFormObj, setPostForm] = useState(initialState);

// const { username, title, content } = postFormObj;

// const onChangeFormHandler = (e) => {
//   const { name, value } = e.target;
//   setPostForm({ ...postFormObj, [name]: value });
// };

// const addPostFormSubmit = (e) => {
//   e.preventDefault();
//   if (
//     username.trim() === "" ||
//     title.trim() === "" ||
//     content.trim() === ""
//   ) {
//     alert("내용을 입력하세요");
//   } else {
//     setPostForm({ ...postFormObj });
//     dispatch(__addPost({ ...postFormObj, createdAt: new Date().getTime() }));
//     setPostForm(initialState);
//     navigate("/");
//   }
// };
