// // // console.log('=======Phần 1: Đồng Bộ vs Bất Đồng Bộ========')
// // // console.log('=====1.1 Synchronous (Đồng bộ) - Chạy tuần tự=====')

// // // console.log('1')
// // // console.log('2')
// // // console.log('3')
// // // console.log('Mỗi dòng chờ dòng trước chạy xong mới chạy tiếp.')
// // // console.log('====1.2 Asynchronous (Bất đồng bộ) - Không chờ=====')
// // // console.log("Bước 1");

// // // setTimeout(() => {
// // //     console.log("Bước 2 - mất 2 giây")
// // // }, 1000)

// // // console.log("Bước 3");

// // // console.log('=====1.3 Tại sao cần Async?======')
// // // console.log('====Giả sử đọc file mất 3 giây=====')
// // // console.log('start')

// // // // ❌ BAD: Đồng bộ - chương trình bị treo 3 giây
// // // console.log("file.txt"); // Chờ 3 giây

// // // console.log("End"); // Phải chờ 3 giây mới chạy

// // // console.log('=====Phần 2: Callbacks (1 giờ)=====')
// // // console.log('======2.1 Callback co ban==========')
// // // function greeting(name, callback) {
// // //     console.log(`hello ${name}`)
// // //     callback()
// // // }

// // // greeting('an', function () {
// // //     console.log('Call back duoc goi')
// // // })

// // // greeting('binh', () => {
// // //     console.log('arrow function')
// // // })

// // // console.log('======2.2 Callback voi setTimeout========')
// // // console.log('start')

// // // setTimeout(() => {
// // //     console.log('Sau 2 giay')
// // // }, 2000)

// // // setTimeout(() => {
// // //     console.log('sau 1s')
// // // }, 1000)

// // // console.log('end')

// // // console.log('=======2.3 Callback Hell (Vấn đề của callback)=========')
// // // console.log('========// ❌ Callback Hell - Code khó đọc========')

// // // setTimeout(() => {
// // //     console.log('buoc 1')

// // //     setTimeout(() => {
// // //         console.log('buoc 2')

// // //         setTimeout(() => {
// // //             console.log('buoc 3')
// // //         }, 1000)
// // //     }, 1000)
// // // }, 1000)

// // // setTimeout(() => {
// // //     console.log('+++++++++++++Giải pháp? → Promises!++++++++++')
// // // }, 3200)

// // // console.log('======Thực hành Callbacks:========')
// // // console.log('======Bài tập 1: Tạo function với callback=======')
// // // function calculated(a, b, operator) {
// // //     return operator(a, b)
// // // }

// // // let result1 = calculated(5, 3, (x, y) => x + y);
// // // console.log(result1); // 8

// // // let result2 = calculated(5, 3, (x, y) => x * y);
// // // console.log(result2)

// // // console.log('======Bài tập 2: Simulate API call=======')
// // // function fetchUser(userId, callback) {
// // //     console.log(`Đang lấy user ${userId}`)

// // //     setTimeout(() => {
// // //         let user = {
// // //             id: userId,
// // //             name: "User " + userId,
// // //             email: `user${userId}@gmail.com`
// // //         };
// // //         callback(user)
// // //     }, 3400)
// // // }

// // // console.log('Start')
// // // fetchUser(1, (user) => {
// // //     console.log('User nhan duoc: ', user)
// // // })
// // // console.log("end")

// // // console.log('=========Bài tập 3: Array processing với callback=======')
// // // let numbers = [1, 2, 3, 4, 5]

// // // function customArray(array, transformCallback) {
// // //     let results = [];
// // //     for (let item of array) {
// // //         results.push(transformCallback(item))
// // //     }
// // //     return results;
// // // }

// // // let doubled = customArray(numbers, n => n * 2)
// // // console.log(doubled)

// // // let squared = customArray(numbers, n => n ** 2)
// // // console.log(squared)

// // // console.log('====Phần 3: Promises=====')
// // // console.log('=====Promise = Lời hứa. Sẽ trả về kết quả trong tương lai.=============')
// // // console.log('======3.1 Promise cơ bản=========')
// // // console.log('++++ Tạo promises +++++')

// // // let myPromises = new Promise((resolve, reject) => {
// // //     let success = false;

// // //     if (success) {
// // //         resolve('Thanh cong')
// // //     } else {
// // //         reject('Fail')
// // //     }
// // // })

// // // myPromises
// // //     .then((result) => {
// // //         console.log(result)
// // //     })
// // //     .catch((error) => {
// // //         console.log(error)
// // //     })

// // // console.log('======Promise với setTimeout=========')
// // // function delay(seconds) {
// // //     return new Promise((resolve) => {
// // //         setTimeout(() => {
// // //             resolve(`Đã chờ ${seconds} giây`)
// // //         }, seconds * 1000)
// // //     })
// // // }

// // // console.log('start 3.2')
// // // delay(2)
// // //     .then((message) => {
// // //         console.log(message)
// // //     })

// // // console.log('end 3.2')

// // // console.log('========3.3 Promise Chaining - Giải quyết Callback Hell=======')
// // // console.log('====✅ GOOD: Promises - Code dễ đọc hơn=====')
// // // function step1() {
// // //     return new Promise((resolve) => {
// // //         setTimeout(() => {
// // //             console.log('buoc 1.3.3');
// // //             resolve();
// // //         }, 2000);
// // //     })
// // // }

// // // function step2() {
// // //     return new Promise((resolve) => {
// // //         setTimeout(() => {
// // //             console.log('buoc 2.3.3')
// // //             resolve();
// // //         }, 2000);
// // //     })
// // // }

// // // function step3() {
// // //     return new Promise((resolve) => {
// // //         setTimeout(() => {
// // //             console.log('buoc 3.3.3')
// // //             resolve();
// // //         }, 2000);
// // //     });
// // // }

// // // step1()
// // //     .then(() => step2())
// // //     .then(() => step3())
// // //     .then(() => {
// // //         console.log('Hoan thanh');
// // //     });

// // // console.log('=====3.4 Promise với data======')
// // // function fetchUser(userId) {
// // //     return new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             if (userId > 0) {
// // //                 resolve({
// // //                     id: userId,
// // //                     name: `User ${userId}`,
// // //                     email: `user${userId}@gmail.com`
// // //                 })
// // //             } else {
// // //                 reject('Invalid user id')
// // //             }
// // //         }, 4000)
// // //     })
// // // }

// // // fetchUser(3)
// // //     .then((user) => {
// // //         console.log("User: ", user)
// // //         return user.id;
// // //     })
// // //     .then((userId) => {
// // //         console.log("User Id: ", userId)
// // //     })
// // //     .catch((error) => {
// // //         console.log("Loi: ", error)
// // //     })
// // //     .finally(() => {
// // //         console.log("Luon chay du thanh cong hay that bai")
// // //     })

// // // console.log('=======3.5 Promise.all() - Chạy nhiều Promises cùng lúc====')
// // // function fetchUser2(id) {
// // //     return new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             resolve({
// // //                 id,
// // //                 name: `user` + id
// // //             });
// // //         }, 4200)
// // //     })
// // // }

// // // Promise.all([
// // //     fetchUser2(1),
// // //     fetchUser2(2),
// // //     fetchUser2(3)
// // // ])
// // //     .then((users) => {
// // //         console.log("Tat ca user: ", users)
// // //     });

// // // console.log('=====Promise.race() - Promise nhanh nhất=====')
// // // function fetchFormServer1() {
// // //     return new Promise((resolve) => {
// // //         setTimeout(() => {
// // //             resolve("Server 1")
// // //         }, 4400)
// // //     })
// // // }

// // // function fetchFormServer2() {
// // //     return new Promise((resolve) => {
// // //         setTimeout(() => {
// // //             resolve("Server 2")
// // //         }, 4400)
// // //     })
// // // }

// // // Promise.race([
// // //     fetchFormServer1(),
// // //     fetchFormServer2()
// // // ])
// // //     .then((result) => {
// // //         console.log('Nhanh nhat', result)
// // //     })

// // // console.log('======Thực hành Promises:========')
// // // console.log('=======Bài tập 1: Simulate API=========')
// // // function getUser(userId) {
// // //     return new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             if (userId > 0) {
// // //                 resolve({
// // //                     id: userId,
// // //                     name: 'user' + userId,
// // //                     email: `user${userId}@gmail.com`
// // //                 })
// // //             }
// // //             else {
// // //                 reject('Invalid UserId')
// // //             }
// // //         }, 4500)
// // //     })
// // // }

// // // function getPosts(userId) {
// // //     return new Promise((resolve) => {
// // //         setTimeout(() => {
// // //             resolve([
// // //                 { id: 1, title: "Post1", userId },
// // //                 { id: 2, title: "Post2", userId }
// // //             ])
// // //         }, 4600)
// // //     })
// // // }

// // // console.log("======a) Lấy user rồi lấy posts của user đó=======")
// // // getUser(1)
// // //     .then((user) => {
// // //         console.log("user: ", user)
// // //         return getPosts(user.id);
// // //     })
// // //     .then((posts) => {
// // //         console.log("Posts", posts)
// // //     })
// // //     .catch((error) => {
// // //         console.log("Loi: ", error)
// // //     })

// // // console.log('=======bài 2: Multiple API calls=======')
// // // function fetchProduct(id) {
// // //     return new Promise((resolve) => {
// // //         setTimeout(() => {
// // //             resolve({
// // //                 id, name: `Product ${id}`, price: id * 1000
// // //             })
// // //         }, 4700)
// // //     })
// // // }

// // // Promise.all([
// // //     fetchProduct(1),
// // //     fetchProduct(2),
// // //     fetchProduct(3)
// // // ])
// // //     .then((products) => {
// // //         console.log("All the products: ", products)

// // //         let total = products.reduce((sum, p) => sum + p.price, 0)
// // //         console.log("Total: ", total)
// // //     })

// // // console.log('======Bài 3:Error handling=======')
// // // function randomPromise() {
// // //     return new Promise((resolve, reject) => {
// // //         let random = Math.random();
// // //         setTimeout(() => {
// // //             if (random > 0.5) {
// // //                 resolve(`Success: ${random}`)
// // //             }
// // //             else {
// // //                 reject(`Failed: ${random}`)
// // //             }
// // //         }, 4800)
// // //     })
// // // }

// // // randomPromise()
// // //     .then((result) => {
// // //         console.log(result)
// // //     })
// // //     .catch((error) => {
// // //         console.log("Error: ", error)
// // //     })
// // //     .finally(() => {
// // //         console.log("Promises completed")
// // //     })

// // // console.log('======Phần 4: Async/Await======== ')
// // // console.log('======4.1 Async Function=========')
// // // console.log('=======Function Binh thuong')
// // // function normalFunction() {
// // //     return "Hello"
// // // }

// // // console.log('=======Async function - luôn trả về Promise======')
// // // async function asyncFunction() {
// // //     return "Hello ASYNC"
// // // }

// // // asyncFunction().then(result => {
// // //     console.log(result)
// // // })

// // // console.log('======4.2 Await - Chờ Promise=========')
// // // function delay(seconds) {
// // //     return new Promise((resolve) => {
// // //         setTimeout(() => {
// // //             resolve(`Da cho ${seconds}s`)
// // //         }, 4900)
// // //     })
// // // }

// // // // //voi promises 
// // // // function oldWay() {
// // // //     console.log('start')
// // // //     delay(2)
// // // //         .then((message) => {
// // // //             console.log(message)
// // // //             return delay(1)
// // // //         })
// // // //         .then((message) => {
// // // //             console.log(message)
// // // //         })

// // // //     console.log('End')
// // // // }

// // // //✅ Với Async/Await - DỄ ĐỌC HƠN!
// // // async function newWay(){
// // //     console.log('start')

// // //     let message1 = await delay(2); // cho 2 giay
// // //     console.log(message1)

// // //     let message2 = await delay(1); //cho them 1 giay
// // //     console.log(message2)

// // //     console.log('end')
// // // }

// // // newWay();

// // console.log('=======4.3 Async/Await với API=======')
// // function getUser(userId) {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             if (userId > 0) {
// //                 resolve({
// //                     id: userId,
// //                     name: `User ${userId}`
// //                 })
// //             } else {
// //                 reject("Invalid UserId")
// //             }
// //         }, 5000)
// //     })
// // }

// // function fetchPosts(userId) {
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve([
// //                 { id: 1, title: "Post 1" },
// //                 { id: 2, title: "Post 2" }
// //             ]);
// //         }, 1000);
// //     });
// // }

// // function getDataOldWay() {
// //     getUser(1)
// //         .then((user) => {
// //             console.log("User: ", user)
// //             return fetchPosts(user.id)
// //         })
// //         .then((posts) => {
// //             console.log("All post: ", posts)
// //         })
// //         .catch((error) => {
// //             console.log("Error: ", error)
// //         })
// // }

// // getDataOldWay();

// // async function getDataNewWay() {
// //     try {
// //         let user = await getUser(2);
// //         console.log("User: ", user)

// //         let posts = await fetchPosts(user.id);
// //         console.log("Posts: ", posts)
// //     } catch (error) {
// //         console.log("error: ", error)
// //     }
// // }

// // getDataNewWay();

// // console.log('=======4.4 Try/Catch - Xử lý lỗi=======')
// // async function getData(){
// //     try{
// //         let user = await getUser(0)
// //         console.log(user)

// //         let posts = await fetchPosts(user.id)
// //         console.log(posts)

// //         return {user , posts} // return neu thanh cong
// //     }catch(error){
// //         console.log("co loi: ", error)
// //         return null; //Return null neu loi
// //     }finally{
// //         console.log("Luon chay du thanh cong hay loi")
// //     }
// // }

// // getData();

console.log('=======4.5 Await nhiều Promises=======')
function fetchProduct(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ({ id, name: `Product ${id}`, price: id * 1000 });
        }, 1000)
    })
}

// ❌ BAD: Chạy tuần tự - mất 3 giây
async function sequentialFetch() {
  let product1 = await fetchProduct(1); // 1 giây
  let product2 = await fetchProduct(2); // 1 giây
  let product3 = await fetchProduct(3); // 1 giây

  console.log([product1, product2, product3]);
}

sequentialFetch()

// ✅ GOOD: Chạy song song - mất 1 giây
async function parallelFetch() {
  let products = await Promise.all([
    fetchProduct(1),
    fetchProduct(2),
    fetchProduct(3)
  ]);

  console.log(products);
}

parallelFetch();

console.log('4.6 Ví dụ thực tế')
console.log('==// Simulate database===')
function queryDatabase(sql) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Executing: ${sql}`);
            resolve({ success: true, data: [] });
        }, 200)
    })
}

setTimeout(() => {
    console.log("====CRUD Operations=====")
}, 300)

async function createUser(name, email) {
    try {
        let result = await queryDatabase(
            `INSERT INTO users (name, email) VALUES ('${name}', '${email}')`)
        console.log("User created: ", result)
    }catch(error){
        console.log("Error creating user: ", error)
    }
}

async function getUsers() {
  try {
    let result = await queryDatabase("SELECT * FROM users");
    console.log("Users:", result);
    return result.data;
  } catch (error) {
    console.log("Error getting users:", error);
  }
}

async function updateUser(id, name) {
  try {
    let result = await queryDatabase(
      `UPDATE users SET name='${name}' WHERE id=${id}`
    );
    console.log("User updated:", result);
    return result;
  } catch (error) {
    console.log("Error updating user:", error);
  }
}

async function deleteUser(id) {
  try {
    let result = await queryDatabase(`DELETE FROM users WHERE id=${id}`);
    console.log("User deleted:", result);
    return result;
  } catch (error) {
    console.log("Error deleting user:", error);
  }
}


async function main() {
  await createUser("An", "an@gmail.com");
  await getUsers();
  await updateUser(1, "An Updated");
  await deleteUser(1);
}

main()

console.log('=====Thuc hanh Async/Await')
console.log('====// Bài tập 7: Convert Promises sang Async/Await=========')
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0 && id < 5) {
                resolve({ id, name: `User ${id}` });
            } else {
                reject("User not found");
            }
        }, 1000)
    })
}

async function getUserData(id) {
    try {
        let user = await fetchUser(id);
        console.log(user)
        return user;
    } catch (error) {
        console.log("Error: ", error)
        return null;
    }
}

getUserData(1)
getUserData(10)

console.log('====// Bài tập 8: Sequential vs Parallel======')
function slowTask(name, seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} completed`)
            resolve(name);
        }, seconds * 1000)
    })
}

console.log('=====// a) Sequential - mất 6 giây==========')
async function runSequential() {
    console.log('===Sequential Start===')
    let start = Date.now()

    await slowTask("Task 1", 2)
    await slowTask("Task 2", 2)
    await slowTask("Task 3", 2)

    let end = Date.now()
    console.log(`Sequential took: ${(end - start)}`)
}

async function runParallel() {
    console.log('====Start parallet======')
    let start = Date.now()
    await Promise.all([
        slowTask("Task 1", 2),
        slowTask("Task 2", 2),
        slowTask("Task 3", 2)
    ])

    let end = Date.now();
    console.log(`Parallet took: ${(end - start)}`)
}

async function test(){
    await runSequential();
    await runParallel();
}

test()

console.log('Bài tập 2: Real API simulation')
async function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "123") {
                resolve({
                    token: "abc123",
                    userId: 1
                })
            }
            else {
                reject("Invalid credentials")
            }
        }, 1000)
    })
}

async function getProfileUser(token, userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (token === "abc123") {
                resolve({
                    id: userId,
                    name: "Admin User",
                    email: "admin@gmail.com"
                })
            } else {
                reject("Invalid Token")
            }
        }, 1000)
    })
}

async function getUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "Post 1", userId },
                { id: 2, title: "Post 2", userId }
            ])
        }, 1000)
    })
}

//complete flow
async function completeUserFlow(username, password) {
    try {
        console.log("Logging in....")
        let authData = await login(username, password)
        console.log("Login successful: ", authData)

        console.log("Fetching profile...")
        let profile = await getProfileUser(authData.token, authData.userId)
        console.log("Profile: ", profile)

        console.log("Fetching posts....")
        let posts = await getUserPosts(authData.userId)
        console.log("Posts: ", posts)

        return { profile, posts }
    } catch (error) {
        console.log("Error: ", error)
        return null;
    }
}

completeUserFlow("admin", "123")
// completeUserFlow("User","123")

