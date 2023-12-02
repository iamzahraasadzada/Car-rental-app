import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import styled from "styled-components";
import { createContact } from "../../services/apiContact";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-text-black);
`;
const Span = styled.span`
  color: var(--color-orange);
`;
const Input = styled.input`
  background-color: #f2f2f2;
  border: none;
  font-size: 1.6rem;
  padding: 1.9rem 3rem;
`;
const TextArea = styled.textarea`
  height: 18rem;
  background-color: #f2f2f2;
  border: none;
  font-size: 1.6rem;
  padding: 1.9rem 3rem;
`;

const Button = styled.button`
  color: #ffffff;
  background-color: var(--color-orange);
  transition: all 0.3s;
  font-size: 2rem;
  padding: 1.4rem 4.4rem;
  width: 100%;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  display: flex;
  gap: 1.1rem;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);

  &:hover {
    box-shadow: rgba(255, 77, 48, 0.25) 0px 14px 28px,
      rgba(255, 77, 48, 0.22) 0px 10px 10px;
  }
`;

function Form() {
  const { register, handleSubmit, formState, reset } = useForm();

  const { errors } = formState;

  const { isLoading, mutate } = useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      toast.success("Information successfully sented");
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    mutate({ ...data });
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow>
        <Label htmlFor="fullName">
          Full Name <Span>*</Span>
        </Label>
        <Input
          id="fullName"
          type="text"
          placeholder='E.g: "Joe Shmoe"'
          {...register("fullName", { required: "This field is required" })}
          error={errors?.fullName?.message}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="email">
          Email <Span>*</Span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="youremail@exapmle.com"
          {...register("email", {
            required: "This field is required",
          })}
          error={errors?.email?.message}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="about">
          Tell us about it <Span>*</Span>
        </Label>
        <TextArea
          id="about"
          placeholder="Write here..."
          {...register("about", {
            required: "This field is required",
          })}
          disabled={isLoading}
          error={errors?.about?.message}
        />
      </FormRow>
      <Button type="submit">Send Message</Button>
    </StyledForm>
  );
}

export default Form;
