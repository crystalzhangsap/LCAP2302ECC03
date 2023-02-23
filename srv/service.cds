using { crystalcicdtesting0223 as my } from '../db/schema';

using crystalcicdtesting0223 from '../db/schema';

@path : 'service/crystalcicdtesting0223'
service crystalcicdtesting0223Service
{
    entity SrvAuthors as
        projection on my.Authors;

    entity SrvBooks as
        projection on my.Books;
}

annotate crystalcicdtesting0223Service with @requires :
[
    'authenticated-user'
];
