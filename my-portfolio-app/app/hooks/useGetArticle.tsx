import { useQuery } from "@apollo/client"
import { GetArticleResponse } from "../types/blogArticle"
import { GET_ARTICLE } from "../data/graphql/queries/queryGetArticle"

const useGetArticle = () => {
    const { data, loading, error, refetch } = useQuery<GetArticleResponse>(GET_ARTICLE);

    const getArticleById = async (id: string) => {
        try {
            // Use 'refetch' with variables to re-execute the query
            const response = await refetch({ id });
            console.log(response.data?.getArticleById);
        } catch (err) {
            console.error(err);
        }
    };

    // Don't forget to return what you need from the hook
    return { getArticleById, data, loading, error };
};

export default useGetArticle;