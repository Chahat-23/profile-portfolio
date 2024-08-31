export const fetchProjects = async () => {
  try {
    const response = await fetch('/projects.json');
    const data = await response.json();
    return data.projects || [];
  } catch (error) {
    console.error('Fetching projects failed:', error);
    throw error;
  }
};