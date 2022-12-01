let products = [
    {
      heading: "This was fuuny",
      Author:"Homer Simpson",
      data:"Node.js",
      content:"So,I Saw this video on Youtube and this guy",
      date:"Thursday,November 28th 2019,4:36:09"
    },
    {
      heading: "Java,eh?",
      Author:"Homer Simpson",
      data:"java",
      content:"Doh",
      date:"Thursday,November 28th 2019,4:36:09"
    },
    {
      heading: "This was fuuny",
      Author:"Homer Simpson",
      data:"Node.js",
      content:"So,I Saw this video on Youtube and this guy",
      date:"Thursday,November 28th 2019,4:36:09"
    },
    {
    heading: "This was fuuny",
    Author:"Homer Simpson",
    data:"Node.js",
    content:"So,I Saw this video on Youtube and this guy",
    date:"Thursday,November 28th 2019,4:36:09"
  }  ];
  {products.map((x) => (
    <Assign author={x.author} Heading={x.heading} data={x.data} content={x.content}/>
  ))};