export const repositoriesTransformFromServer = repositories =>
  repositories.map(item => ({
    fullName: item.full_name,
    stars: item.stargazers_count,
    ownerLogin: item.owner.login,
    issuesCount: item.open_issues,
    repositoryUrl: item.html_url,
  }));
