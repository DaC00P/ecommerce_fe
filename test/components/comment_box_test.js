// import CommentBox from '../../src/components/comment_box';
// import {renderComponent, expect} from '../test_helper';
//
// describe('Add a Comment', ()=>{
//   let component;
//   beforeEach(()=>{
//     component = renderComponent(CommentBox);
//   });
//
//   it('has the class comment-box', ()=>{
//     expect(component).to.have.class('comment-box');
//   });
//
//   it('has a text area', ()=> {
//     expect(component.find('textarea')).to.exist;
//   });
//
//   it('has an Add a Comment button', ()=>{
//     expect(component.find('button')).to.exist;
//   });
//
//   describe('comment submission & text entering', ()=>{
//     beforeEach(()=>{
//       component.find('textarea').simulate('change', 'new comment');
//     });
//
//     it('shows text that is entered', ()=>{
//       expect(component.find('textarea')).to.have.value('new comment');
//     });
//
//     it('clears input when submitted', ()=>{
//       component.simulate('submit');
//       expect(component.find('textarea')).to.have.value('');
//     });
//   });
//
// });
