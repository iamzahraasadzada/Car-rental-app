import styled from "styled-components";
import { FaCarSide } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createPickCar } from "../../services/apiPickCar";
import toast from "react-hot-toast";

const Form = styled.div`
  background: url("./book-bg.png");
  position: relative;
  z-index: 8;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5rem 4rem;
  gap: 2rem;
  margin-top: 1.2rem;

  @media (max-width: 730px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 490px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  gap: 1.2rem;
  @media (max-width: 490px) {
    width: 100%;
  }
`;

const Select = styled.select`
  padding: 0.8rem;
  font-size: 1.2rem;

  &:focus {
    outline-color: var(--color-orange);
  }
`;

const Input = styled.input.attrs({
  type: "date",
})`
  padding: 0.8rem;
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  &:focus {
    outline-color: var(--color-orange);
  }
`;

const Button = styled.button`
  margin-top: auto;
  border: none;
  border-radius: var(--border-radius-sm);
  display: flex;
  gap: 1.1rem;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  color: #ffffff;
  background-color: var(--color-orange);
  transition: all 0.3s;
  width: 80%;
  &:hover {
    box-shadow: rgba(255, 77, 48, 0.25) 0px 14px 28px,
      rgba(255, 77, 48, 0.22) 0px 10px 10px;
  }
  &:focus {
    outline-color: var(--color-orange);
  }
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
`;

const Layout = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  height: 100%;
  padding: 10rem 0;
`;

function BookCar() {
  const { register, handleSubmit, reset } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: createPickCar,
    onSuccess: () => {
      toast.success("sent successfully");
    },
    onError: (err) => toast.error("err.message"),
  });

  function onSubmit(data) {
    console.log(data);
    mutate({ ...data });
    reset();
  }

  return (
    <Layout>
      <Form>
        <FormRow>
          <label htmlFor="type">
            <FaCarSide />
            <span>Select Your Car Type *</span>
          </label>
          <Select
            id="type"
            {...register("type", { required: "Thos field is required" })}
            disabled={isLoading}
          >
            <option>Select your car type</option>
            <option value="Audi A1 S-Line">Audi A1 S-Line</option>
            <option value="VW Golf 6">VW Golf 6</option>
            <option value="Toyota Camry">Toyota Camry</option>
            <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
            <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
            <option value="VW Passat CC">VW Passat CC</option>
          </Select>
        </FormRow>

        <FormRow>
          <label htmlFor="pickUp">
            <FaLocationDot />
            <span>Pick-up *</span>
          </label>
          <Select
            id="pickUp"
            {...register("pickUp", { required: "This filed is required" })}
            disabled={isLoading}
          >
            <option>Select pick up location</option>
            <option value="Belgrade">Belgrade</option>
            <option value="Novi Sad">Novi Sad</option>
            <option value="Nis">Nis</option>
            <option value="Kragujevac">Kragujevac</option>
            <option value="Subotica">Subotica</option>
          </Select>
        </FormRow>

        <FormRow>
          <label htmlFor="dropOf">
            <FaLocationDot />
            <span>Drop-of *</span>
          </label>
          <Select
            id="dropOf"
            {...register("dropOf", { required: "This field is required" })}
            disabled={isLoading}
          >
            <option>Select drop of location</option>
            <option value="Belgrade">Belgrade</option>
            <option value="Novi Sad">Novi Sad</option>
            <option value="Nis">Nis</option>
            <option value="Kragujevac">Kragujevac</option>
            <option value="Subotica">Subotica</option>
          </Select>
        </FormRow>

        <FormRow>
          <label htmlFor="pickUpDate">
            <FaCalendarAlt />
            <span>Pick-up *</span>
          </label>
          <Input
            type="date"
            id="pickUpDate"
            {...register("pickUpDate", { required: "This field is required" })}
            disabled={isLoading}
          ></Input>
        </FormRow>

        <FormRow>
          <label htmlFor="dropOfDate">
            <FaCalendarAlt />
            <span>Drop-of *</span>
          </label>
          <Input
            type="date"
            id="dropOfDate"
            {...register("dropOfDate", { required: "This field is required" })}
            disabled={isLoading}
          ></Input>
        </FormRow>

        <FormRow>
          <Button onClick={handleSubmit(onSubmit)} type="submit">
            Search
          </Button>
        </FormRow>
      </Form>
    </Layout>
  );
}

export default BookCar;
