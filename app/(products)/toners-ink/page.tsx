import { Product } from '../product'
import { ProductsLayout } from '../product-list-layout'
import { SearchForm } from '../search-form'

export default function ProductPage() {
	return (
		<ProductsLayout title="Toners and Ink" form={<SearchForm />}>
			{Array.from({ length: 9 }).map((_, i) =>
				<Product key={i} src="/placeholder/printer.png" alt="a black printer" brand="Brother" name="Inkjet Printer" price={8998} url="/toners-ink/1" />
			)}
		</ProductsLayout>
	)
}