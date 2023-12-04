"use client"
import { useMutation } from '@apollo/client';
import { BlogArticle, AddArticleResponse } from "../types/blogArticle";
import { ADD_ARTICLE } from '../data/graphql/mutations/mutationAddNewArticle';

const useNewArticle = () => {
    const  [addArticle, { data, loading, error }] = useMutation<AddArticleResponse>(ADD_ARTICLE);
    const addNewArticle = async (newArticle: BlogArticle) => {
        try {
            const response = await addArticle({
                variables: {
                  title: newArticle.title,
                  summary: newArticle.summary,
                  content: newArticle.content,
                  imageUrl: newArticle.imageUrl
                }
              });
              console.log(response.data?.createArticle);
        }
        catch (err){
            console.log(err);
        }
       
    }

    return {loading, error, data, addNewArticle}
};

export default useNewArticle;
