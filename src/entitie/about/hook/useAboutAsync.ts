import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
    addComp,
    addProject,
    deleteComp,
    deleteProject,
    fetchComps,
    updateComps,
    updateProject,
} from '../api/about';
import { CompModel, ProjectModel } from '../model/type';

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const useAboutCompQuery = () => {
    return useQuery({
        queryKey: ['compList'],
        queryFn: async () => {
            const reuslt = await fetchComps();
            return reuslt;
        },
    });
};
const useAboutCompAddMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ docData }: { docData: CompModel }) => {
            const result = await addComp(docData);
            queryClient.invalidateQueries({
                queryKey: ['compList'],
            });
            return result;
        },
    });
};
const useAboutCompUpdateMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ docData }: { docData: CompModel }) => {
            const result = await updateComps(docData);
            queryClient.invalidateQueries({
                queryKey: ['compList'],
            });
            return result;
        },
    });
};
const useAboutCompDeleteMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ docData }: { docData: CompModel }) => {
            const result = await deleteComp(docData);
            queryClient.invalidateQueries({
                queryKey: ['compList'],
            });
            return result;
        },
    });
};

const useAboutProjectAddMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ docData }: { docData: ProjectModel }) => {
            const result = await addProject(docData);
            queryClient.invalidateQueries({
                queryKey: ['compList'],
            });
            return result;
        },
    });
};
const useAboutProjectUpdateMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ docData }: { docData: ProjectModel }) => {
            const result = await updateProject(docData);
            queryClient.invalidateQueries({
                queryKey: ['compList'],
            });
            return result;
        },
    });
};
const useAboutProjectDeleteMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ docData }: { docData: ProjectModel }) => {
            const result = await deleteProject(docData);
            queryClient.invalidateQueries({
                queryKey: ['compList'],
            });
            return result;
        },
    });
};

export {
    useAboutCompQuery,
    useAboutCompAddMutation,
    useAboutCompUpdateMutation,
    useAboutCompDeleteMutation,
    useAboutProjectAddMutation,
    useAboutProjectUpdateMutation,
    useAboutProjectDeleteMutation,
};
