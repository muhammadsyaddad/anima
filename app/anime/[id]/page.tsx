import { getAnimeRespond } from "@/app/libs/api-libs";

interface Props {
  params: {
    id: string;
  };
}

const Page = async ({ params }: Props) => {
  const anime = await getAnimeRespond(`anime/${params.id}`, '');
  console.log(anime);
  
  return (
    <div>
    </div>
  );
};

export default Page;