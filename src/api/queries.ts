import { useQuery } from "@tanstack/react-query";
import { fetchFolderContents, fetchFolderTree } from "./hooks";
import type { IFolderContent, IFolderTreeContent } from "../types";

export const useFolderTreeQuery = (
  folderId: string | undefined,
  queryKey: string = "folder-tree",
) => {
  return useQuery<IFolderTreeContent[]>({
    queryKey: [queryKey, folderId],
    queryFn: async () => {
      if (!folderId) throw new Error("No folder ID provided");
      return fetchFolderTree(folderId);
    },
    staleTime: 5 * 60 * 1000,
    enabled: true,
    retry: 1,
  });
};
export const useFolderContent = (
  folderId: string | undefined,
  queryKey: string = "folder-content",
) => {
  return useQuery<IFolderContent[]>({
    queryKey: [queryKey, folderId],
    queryFn: async () => {
      if (!folderId) throw new Error("No folder ID provided");
      return fetchFolderContents(folderId);
    },
    staleTime: 5 * 60 * 1000,
    enabled: true,
    retry: 1,
  });
};
