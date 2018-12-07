 export const postUser = user => (
     $.ajax({
        url: '/api/users',
        mthod: 'POST',
        data: { user }
     })
 );
 export const postSession = user => (
     $.ajax({
        url: '/api/session',
        mthod: 'POST',
        data: { user }
     })
 );
 export const deleteSession = user => (
     $.ajax({
        url: '/api/session',
        mthod: 'DELETE',
        data: { user }
     })
 );