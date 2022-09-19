function DeleteUserAction(userId) {
   this.type = 'DELETE-USER';
   this.payload = {
      userId: userId
   }
}

const action1 = new DeleteUserAction(121212)
console.log(action1)