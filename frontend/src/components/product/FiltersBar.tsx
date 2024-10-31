import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FiltersForm from "@/components/product/FiltersForm";

export default function FiltersBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filtrar por...</CardTitle>
      </CardHeader>
      <CardContent>
        <FiltersForm></FiltersForm>
      </CardContent>
    </Card>
  );
}