export default function ProductSlug({ params }: { params: { slug: string } }) {
    return <div>{params.slug}</div>;
}
