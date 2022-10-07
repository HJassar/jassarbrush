import { useState } from "react";
import { TextField, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm, Controller } from "react-hook-form";
import frontFetch from "../lib/frontFetch";
export default function ContactForm() {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: { name: "", email: "", message: "" },
    mode: "onChange",
  });
  const { isDirty, isValid, errors } = formState;
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    const response = await frontFetch("/api/contact", "POST", data);
    if (response.data[0].createdTime) setSubmitted(true);
    setLoading(false);
  };

  return (
    <Box
      minHeight={350}
      width={{ xs: "100%", sm: "60%" }}
      sx={{
        my: 2,
        mr: { xs: 0, sm: 5 },
        p: 3,
        borderRadius: 5,
        background: "#FFFFFF",
      }}
    >
      {submitted ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            color: "#000000",
          }}
        >
          <Box sx={{ fontSize: 24, fontWeight: 600, mb: 2 }}>
            Thank you for your message!
          </Box>
          <Box sx={{ fontSize: 16, fontWeight: 400, mb: 2 }}>
            I will get back to you as soon as possible.
          </Box>
        </Box>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                label="Your Name"
                sx={{ mb: 2 }}
                error={Boolean(errors.name)}
                helperText={errors.name ? errors.name.message : ""}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                label="Your Email"
                sx={{ mb: 2 }}
                error={Boolean(errors.email)}
                helperText={errors.email ? errors.email.message : ""}
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Message"
                variant="filled"
                multiline
                rows={4}
                sx={{ mb: 2 }}
                error={Boolean(errors.message)}
                helperText={errors.message ? errors.message.message : ""}
              />
            )}
          />
          <LoadingButton
            fullWidth
            variant="contained"
            type="submit"
            disabled={!isDirty || !isValid}
            loading={loading}
          >
            Submit
          </LoadingButton>
        </form>
      )}
    </Box>
  );
}
