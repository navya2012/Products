const products = productDataList
  .filter(item => item.cat_name === categoryName)
  .map(item => item.items
    ?.filter(data => data.cat_name === categoryProductName)
    ?.map(data => data.products
      ?.filter(list => list.productName === productName) ?? []
    ) ?? []
  ); - ?? []
    ) ?? [] this meaning

    {
      list.productImages.length > 0 && list.productImages.map((image,index) => {
        return (
          <>
            <div>
            <img src={image} key={index} alt=""  width='200px' height='200px'/>
            </div>
          </>
        )
      })
    }


        {/* {
      list.RAM.length > 0 ? list.RAM.map((num) => {
        return (
          <>
             <h6 className='d-inline px-2'>{num == "" ? ("-") : num}</h6>
          </>
        )
      })
     : ("")
    } */}
                          {/* {
      list.SIZE.length > 0 ? list.SIZE.map((num) => {
        return (
          <>
             <h6 className='d-inline px-2'>{num == "" ? ("-") : num}</h6>
          </>
        )
      })
     : ("")
    } */}

                  {/* {
                        category.length > 0 && category.map((item) => {
                            return (
                                <>
                                    <h2 style={{ color: 'green' }}>{item.cat_name.toUpperCase()}</h2>
                                </>
                            )
                        })
                    } */}