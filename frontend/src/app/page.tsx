import { Form } from "@/components/Form";
import Produtos from "@/components/Produtos";

export default function Home() {
  
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      <Form />
      <Produtos />
    </div>
  );
}
