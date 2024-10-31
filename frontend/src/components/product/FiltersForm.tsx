import FiltersSection from "@/components/product/FiltersSection";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { categories, brands } from "@/lib/fakeData/filtersData";
import { Input } from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function FiltersForm() {
  return (
    <form action="">
      <FiltersSection title="Categoría">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecciona una categoría" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem value={cat.value} key={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FiltersSection>
      <FiltersSection title="Marca">
        {brands.map((brand) => (
          <div key={brand} className="flex items-center space-x-2 py-1">
            <Checkbox id={brand} />
            <Label htmlFor={brand}>{brand}</Label>
          </div>
        ))}
      </FiltersSection>
      <FiltersSection title="Precio">
        <Input placeholder="mín." className="inline-block w-16" />
        <span className="inline-block w-8 text-center">-</span>
        <Input placeholder="máx" className="inline-block w-16" />
      </FiltersSection>
      <div>
        <Button className="mt-4">Ver resultados</Button>
      </div>
    </form>
  );
}
