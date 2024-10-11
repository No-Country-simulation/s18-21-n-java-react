import Image from "next/image";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

interface Product {
  image: string;
  name: string;
  description: string;
  brand: string;
  price: number;
}

interface ProductComponentProps {
  product: Product;
}

export function Product({ product }: ProductComponentProps) {
  return (
    <section className="flex flex-col sm:flex-row sm:justify-evenly items-center pb-4 gap-4 sm:gap-0">
      <section className="w-11/12 aspect-square sm:w-1/2 max-w-lg relative">
        <Image fill src={product.image} alt={product.name} />
      </section>
      <Card className="w-5/6 sm:w-5/12">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.brand}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{product.description}</p>
          <p className="text-3xl text-secundario pt-6">$ {product.price}</p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-4">
            <Button className="text-lg">
              <span className="mr-4">Añadir</span> <IoCartOutline />
            </Button>

            <Button size="icon" variant="ghost" className="text-3xl">
              <IoHeartOutline />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
