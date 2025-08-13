import { useCallback } from 'react';

type ExportOptions = {
  mimeType?: string;
  fileExtension?: string;
};

export function useExport() {
  const handleExport = useCallback((
    content: string,
    filename: string = 'file.tsx',
    options: ExportOptions = {}
  ) => {
    const {
      mimeType = 'text/plain',
      fileExtension = filename.includes('.') ? '' : '.tsx'
    } = options;

    try {
      if (!content) {
        console.warn('No content provided for export');
        return;
      }

      const finalFilename = filename.endsWith(fileExtension) 
        ? filename 
        : `${filename}${fileExtension}`;

      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = finalFilename;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      // Clean up after a small delay
      setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (error) {
      console.error('Export failed:', error);
    }
  }, []);

  return handleExport;
}


/**
 * 
 * 
Basic TSX Export

const exportFile = useExport();

const handleClick = () => {
  exportFile(componentCode, 'MyComponent.tsx');
};

With Custom MIME Type

exportFile(codeString, 'data.json', {
  mimeType: 'application/json',
  fileExtension: '.json'
});

Markdown Export

exportFile(markdownContent, 'README', {
  mimeType: 'text/markdown',
  fileExtension: '.md'
});


 */