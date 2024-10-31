interface FiltersSectionProps {
  children: React.ReactNode,
  title: string,
}

export default function FiltersSection({title, children}: FiltersSectionProps) {
  return(
    <div className="pb-3">
      <h3 className="py-1">{title}</h3>
      <div>{children}</div>
    </div>
  )
}