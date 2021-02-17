export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602d5cd00d211f1a7af10348',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-29g8yrnk',
                  apiId: 'a369ea89-284e-46ec-8371-50b2f82be79b'
                },
                {
                  buildHookId: '602d5cd03e13ab19f9371c3e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-h2crus6m',
                  apiId: '85782439-d183-402c-bb05-ce2d48c34740'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ras88442/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-h2crus6m.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
