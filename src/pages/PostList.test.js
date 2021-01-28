import React from 'react';
import {render} from '@testing-library/react';
import PostList from './PostList';

describe('PostList',()=>{

    it('when loading is true then loading text should be displayed',()=>{
        // AAA -> Arrange Act 
        render(<PostList />)
    })


    it.skip('when loading is false and data exist then render list of dta',()=>{

    })

})