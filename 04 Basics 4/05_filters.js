// we use filters for filtering the data from databases.

const Series=[
    {
        Sname:'New girl', R_Year: 2010, Genre: 'Sitcom'
    },
    {
        Sname:'A girl from nowhere', R_Year: 2018, Genre: 'Thriller'
    },
    {
        Sname:'Wednesday', R_Year: 2023, Genre: 'Mystery'
    },
    {
        Sname:'Modern Family', R_Year: 2008, Genre: 'Sitcom'
    },
    {
        Sname:'Friends', R_Year: 1998, Genre: 'Sitcom'
    },
    {
        Sname:'Dark', R_Year: 2020, Genre: 'Mystery'
    }
]

// this is how you get data from a database.
// now lets say the user wants to view all sitcoms available. they are basically applying a filter on the wesbite.

const Allsitcoms= Series.filter((item)=>{
    return item.Genre==='Sitcom'
})

console.log(Allsitcoms)


// now lets say the user wants to see all thrillers and sitcoms after the year 2009.

const Sitfiler= Series.filter((item)=>{
    return ((item.Genre==='Sitcom' || item.Genre==='Thriller') && (item.R_Year>2009))
})

console.log(Sitfiler)