import React from "react";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { UpdateProdcutForm } from "./UpdateProductForm";
import { Button } from "../ui/button";
import { deleteProductById } from "@/services/product.service";
import { Product } from "@/lib/types/productInterface";

interface CardPanelProducts {
  product: Product;
}

export const CardPanelProducts = ({ product }: CardPanelProducts) => {
  return (
    <div className="w-full flex  rounded-2xl border shadow-md shadow-purple-300 hover:scale-110">
      <div className="w-2/6 flex flex-col items-center ">
        <div className="w-32 h-32 relative ">
          <Image
            src={product.photoUrl}
            alt={product.name}
            fill
            className=" max-w-none p-4 object-fill"
          />
        </div>
        <div>
          <p className="text-center">$ {product.price}</p>
        </div>
      </div>
      <div className="w-3/6 flex flex-col justify-center gap-2 ">
        <div>
          <p>{product.brand}</p>
        </div>
        <div>
          <p className="text-xl">{product.name}</p>
        </div>
      </div>
      <div className="w-1/6  flex flex-col items-center justify-center gap-8">
        <div className="">
          <Dialog>
            <DialogTrigger asChild>
              <FaEdit className="w-6 h-6 hover:text-green-400" />
            </DialogTrigger>
            <DialogContent className="w-11/12 bg-slate-200 h-4/5 overflow-y-auto ">
              <DialogHeader>
                <DialogTitle>Actualizar producto</DialogTitle>
              </DialogHeader>
              <div className="w-full flex justify-center">
                <UpdateProdcutForm id={product.id} />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <MdDelete className="h-8 w-8 text-red-800 hover:text-black" />
            </DialogTrigger>
            <DialogContent className="w-4/12 bg-slate-200 h-1/5 overflow-y-auto ">
              <DialogHeader>
                <DialogTitle>Seguro desea elminar este producto ?</DialogTitle>
              </DialogHeader>
              <div className=" flex  justify-center gap-8">
                <DialogClose asChild>
                  <Button
                    type="button"
                    onClick={() => deleteProductById(product.id.toString())}
                  >
                    Sí
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    No
                  </Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
