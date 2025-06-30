interface Props {
  params: Promise<{ category: string }>;
}

const Page = async ({ params }: Props) => {
  const { category } = await params;

  return (
    <div>
      <div>Category: {category}</div>
    </div>
  );
};

export default Page;
