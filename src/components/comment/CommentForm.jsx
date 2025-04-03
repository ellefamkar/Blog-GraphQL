// if you want to use react-hook-form ---------

import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { SEND_COMMENT } from "../../graphql/mutations";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";

function CommentForm({ slug }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const [sendComment, { loading }] = useMutation(SEND_COMMENT);

  const onSubmit = async (formData) => {
    try {
      await sendComment({ variables: { ...formData, slug } });
      toast.success(
        "Comment successfully sent. It is being listed for approval.",
        {
          position: "top-center",
        }
      );
      reset();
    } catch (error) {
      toast.error(error, {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <Grid
        container
        sx={{
          boxShadow: 3,
          borderRadius: 4,
          py: 1,
          mt: 5,
        }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid size={{ xs: 12 }} m={2}>
          <Typography
            component="p"
            variant="h6"
            fontWeight={700}
            color="primary"
          >
            Add Comment
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }} m={2}>
          <TextField
            id="name"
            name="name"
            autoComplete="off"
            label="Name"
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid size={{ xs: 12 }} m={2}>
          <TextField
            id="email"
            name="email"
            autoComplete="off"
            label="Email"
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid size={{ xs: 12 }} m={2}>
          <TextField
            id="text"
            name="text"
            autoComplete="off"
            label="Comment"
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("text", { required: "Comment cannot be empty" })}
            error={!!errors.text}
            helperText={errors.text?.message}
            multiline
            minRows={4}
          />
        </Grid>
        <Grid size={{ xs: 12 }} m={2}>
          {
            <Button variant="contained" type="submit" disabled={loading || !isValid}>
              {loading ? "Sending..." : "Send"}
            </Button>
          }
        </Grid>
        <ToastContainer />
      </Grid>
    </>
  );
}

export default CommentForm;

// if you are not using react-hook-form

// import { useMutation } from "@apollo/client";
// import { Button, Grid, TextField, Typography } from "@mui/material";
// import { useState } from "react";
// import { SEND_COMMENT } from "../../graphql/mutations";
// import { ToastContainer, toast } from "react-toastify";

// function CommentForm({ slug }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [text, setText] = useState("");

//   const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
//     variables: {
//       name,
//       email,
//       text,
//       slug,
//     },
//   });

//   const sendHandler = () => {
//     if (name && email && text) {
//       sendComment();
//       setName("");
//       setEmail("");
//       setText("");
//     } else {
//       toast.warn("All the fields must be filled.", {
//         position: "top-center",
//       });
//     }
//   };

//   if (data) {
//     toast.success(
//       "Comment successfully sent. It is being listed for approval.",
//       {
//         position: "top-center",
//       }
//     );
//   }

//   return (
//     <>
//       <Grid
//         container
//         sx={{
//           boxShadow: 3,
//           borderRadius: 4,
//           py: 1,
//           mt: 5,
//         }}
//       >
//         <Grid size={{ xs: 12 }} m={2}>
//           <Typography
//             component="p"
//             variant="h6"
//             fontWeight={700}
//             color="primary"
//           >
//             Add Comment
//           </Typography>
//         </Grid>
//         <Grid size={{ xs: 12 }} m={2}>
//           <TextField
//             label="Name"
//             variant="outlined"
//             sx={{ width: "100%" }}
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </Grid>
//         <Grid size={{ xs: 12 }} m={2}>
//           <TextField
//             label="Email"
//             variant="outlined"
//             sx={{ width: "100%" }}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Grid>
//         <Grid size={{ xs: 12 }} m={2}>
//           <TextField
//             label="Comment"
//             variant="outlined"
//             sx={{ width: "100%" }}
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             multiline
//             minRows={4}
//           />
//         </Grid>
//         <Grid size={{ xs: 12 }} m={2}>
//           {loading ? (
//             <Button variant="contained" disabled>
//               Sending...
//             </Button>
//           ) : (
//             <Button variant="contained" onClick={() => sendHandler()}>
//               Send
//             </Button>
//           )}
//         </Grid>
//         <ToastContainer />
//       </Grid>
//     </>
//   );
// }

// export default CommentForm;
