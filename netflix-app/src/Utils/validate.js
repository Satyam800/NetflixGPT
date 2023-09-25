export const validateForm = (name, email, password) => {
  const isemail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const ispassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  console.log(isemail, ispassword);

  if (!isemail) return "Invalid Email ID";
  if (!ispassword) return "Invalid Password";

  return null;
};
