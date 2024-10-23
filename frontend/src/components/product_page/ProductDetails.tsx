import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ProductDetails() {
  return (
    <Accordion type="single" collapsible className="w-5/6 sm:w-3/4 mx-auto">
      <AccordionItem value="item-1">
        <AccordionTrigger>Descripción del producto</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          lobortis nibh. Pellentesque sed mi tortor. Maecenas mattis suscipit
          ex, vitae lacinia turpis porttitor sed. Nullam eu urna fringilla,
          aliquet tellus a, ullamcorper lectus. Quisque id diam sit amet est
          ultricies porta. Vestibulum tincidunt mauris ac quam bibendum, in
          porttitor turpis maximus. Cras rutrum placerat hendrerit. Fusce
          maximus neque ac nisi porttitor ultricies. Donec gravida vehicula
          lorem lacinia porta. Maecenas non ipsum aliquam, varius risus at,
          faucibus ante. Donec condimentum volutpat lectus vel accumsan.
          Curabitur nisl felis, aliquam non mauris et, bibendum aliquam dolor.
          In a consequat leo.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Complementos para tu compra</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          lobortis nibh. Pellentesque sed mi tortor. Maecenas mattis suscipit
          ex, vitae lacinia turpis porttitor sed. Nullam eu urna fringilla,
          aliquet tellus a, ullamcorper lectus. Quisque id diam sit amet est
          ultricies porta. Vestibulum tincidunt mauris ac quam bibendum, in
          porttitor turpis maximus. Cras rutrum placerat hendrerit. Fusce
          maximus neque ac nisi porttitor ultricies. Donec gravida vehicula
          lorem lacinia porta. Maecenas non ipsum aliquam, varius risus at,
          faucibus ante. Donec condimentum volutpat lectus vel accumsan.
          Curabitur nisl felis, aliquam non mauris et, bibendum aliquam dolor.
          In a consequat leo.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Reseñas y comentarios</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          lobortis nibh. Pellentesque sed mi tortor. Maecenas mattis suscipit
          ex, vitae lacinia turpis porttitor sed. Nullam eu urna fringilla,
          aliquet tellus a, ullamcorper lectus. Quisque id diam sit amet est
          ultricies porta. Vestibulum tincidunt mauris ac quam bibendum, in
          porttitor turpis maximus. Cras rutrum placerat hendrerit. Fusce
          maximus neque ac nisi porttitor ultricies. Donec gravida vehicula
          lorem lacinia porta. Maecenas non ipsum aliquam, varius risus at,
          faucibus ante. Donec condimentum volutpat lectus vel accumsan.
          Curabitur nisl felis, aliquam non mauris et, bibendum aliquam dolor.
          In a consequat leo.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
