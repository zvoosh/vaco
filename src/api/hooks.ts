
//treba ti token sa backenda

export const fetchFolderContents = async (folderId: string) => {
  const res = await fetch(
    `https://vacobackend.vercel.app/api/fetch-folder?folderId=${folderId}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_KEY}`,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch folder");
  return await res.json(); // array of file metadata
};

export const fetchFileContent = async (fileId: string) => {
  const res = await fetch(
    `https://vacobackend.vercel.app/api/fetch-text?fileId=${fileId}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_KEY}`,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch file content");
  return await res.text();
};

export const isFolder = (file: any) =>
  file.mimeType === "application/vnd.google-apps.folder";

export const fetchFolderTree = async (folderId: string): Promise<any> => {
  const res = await fetch(
    `https://vacobackend.vercel.app/api/fetch-folder-content?folderId=${folderId}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_KEY}`,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch folder tree");
  return await res.json();
};
// 🔁 Recursive function
export const loadAllFilesRecursively = async (
  folderId: string
): Promise<any[]> => {
  const files = await fetchFolderContents(folderId);

  const allFiles: any[] = [];

  for (const file of files) {
    if (isFolder(file)) {
      // Recursively fetch contents of subfolder
      const nestedFiles = await loadAllFilesRecursively(file.id);
      allFiles.push(...nestedFiles); // flatten
    } else {
      // Fetch content if it's a text file
      let content = "";
      try {
        content = await fetchFileContent(file.id);
      } catch {
        content = "[Error loading content]";
      }

      allFiles.push({ ...file, content });
    }
  }

  return allFiles;
};
