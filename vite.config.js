import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative asset URLs work both locally and under a GitHub Pages repo subpath.
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
export default defineConfig({ plugins: [react()], base: repoName ? `/${repoName}/` : '/' });
