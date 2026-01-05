import { useState } from "react";
import { TextField, Box, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm, Controller, set } from "react-hook-form";
import frontFetch from "../lib/frontFetch";
export default function ContactForm() {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: { name: "", email: "", message: "", website: "" },
    mode: "onChange",
  });
  const { isDirty, isValid, errors } = formState;
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    setLoading(true);
    const response = await frontFetch("/api/contact", "POST", data);
    console.log("Response from contact form:", response);
    if (response.data && response?.data[0].createdTime) setSubmitted(true);
    if (response?.error) setError(response.error.message);
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
        background: "#000000",
        border: "1px solid rgba(255,255,255,0.1)",
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
            color: "white",
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
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
            name="website"
          />
          <Controller
            name="name"
            control={control}
            rules={{
              required: true,
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters long",
              },
              maxLength: {
                value: 30,
                message: "Name cannot exceed 30 characters",
              },
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Name can only contain letters and spaces",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                label="Your Name"
                autoComplete="name"
                sx={{
                  mb: 2,
                  "& .MuiFilledInput-root": {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255,255,255,0.6)",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiFormHelperText-root": {
                    color: "#ff6b6b",
                  },
                }}
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
              validate: (value: string) => {
                const popularEmailDomains = [
                  "gmail.com",
                  "yahoo.com",
                  "hotmail.com",
                  "outlook.com",
                  "live.com",
                  "icloud.com",
                  "aol.com",
                ];
                const emailDomain = value.split("@")[1];
                return popularEmailDomains.includes(emailDomain)
                  ? true
                  : "Please use a popular email domain like gmail.com, yahoo.com, etc.";
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                label="Your Email"
                sx={{
                  mb: 2,
                  "& .MuiFilledInput-root": {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255,255,255,0.6)",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiFormHelperText-root": {
                    color: "#ff6b6b",
                  },
                }}
                error={Boolean(errors.email)}
                helperText={errors.email ? errors.email.message : ""}
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            rules={{
              required: true,
              minLength: {
                value: 30,
                message: "Message must be at least 30 characters long",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Message"
                variant="filled"
                multiline
                rows={4}
                sx={{
                  mb: 2,
                  "& .MuiFilledInput-root": {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255,255,255,0.6)",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiFormHelperText-root": {
                    color: "#ff6b6b",
                  },
                }}
                error={Boolean(errors.message)}
                helperText={errors.message ? errors.message.message : ""}
              />
            )}
          />
          <Typography color="error" sx={{ mb: 2, fontSize: 14, color: "#ff6b6b" }}>
            {error && !isDirty ? <>{error}</> : <></>}
          </Typography>
          <LoadingButton
            fullWidth
            variant="contained"
            type="submit"
            disabled={!isDirty || !isValid}
            loading={loading}
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.2)",
              },
              "&.Mui-disabled": {
                backgroundColor: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.3)",
              },
            }}
          >
            Submit
          </LoadingButton>
        </form>
      )}
    </Box>
  );
}
