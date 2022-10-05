# Nodejs-Mysql-Restapi
Nodejs Mysql Restapi

1. First, create a new folder 

![image](https://user-images.githubusercontent.com/98203936/192918985-4ea61060-07c6-4b19-a203-e1e78e2d7651.png)

2. Open folder with Visual Studio Code
![image](https://user-images.githubusercontent.com/98203936/192919082-88487cde-0f66-4b5f-8db3-6f122f125495.png)

3. Open a terminal with Crtl + ñ
![image](https://user-images.githubusercontent.com/98203936/192919135-26632f55-a854-43d0-9e67-e39771f65030.png)

4. Type npm init -y

![image](https://user-images.githubusercontent.com/98203936/192919482-4e8abfd4-ab13-4632-9b2a-1c7575b0d8d1.png)

![image](https://user-images.githubusercontent.com/98203936/192920371-42b049b3-2904-46a2-9b5c-c010982af796.png)


5. Type npm i express

![image](https://user-images.githubusercontent.com/98203936/192920996-0f7a26d7-947f-4390-813a-23f1f965a8b0.png)

![image](https://user-images.githubusercontent.com/98203936/192921187-3b79038c-c43e-4dac-9b96-4b045debd94b.png)


6. Create a new file index.js 

console.log("Hello World")

![image](https://user-images.githubusercontent.com/98203936/192921984-b9408d0d-cbf4-431f-9e84-2b8953760d15.png)

7. Open a terminal and type node index.js

![image](https://user-images.githubusercontent.com/98203936/192922205-88178474-ee6a-4ff3-bed8-fac2b69349f0.png)


8. type 

![image](https://user-images.githubusercontent.com/98203936/192925734-f8e70052-0607-4002-8778-febd9457ed2b.png)


9. Open a file package.json and type 'type module'

![image](https://user-images.githubusercontent.com/98203936/192925983-f10fceb2-2290-4ba6-87cd-31709235e953.png)

![image](https://user-images.githubusercontent.com/98203936/192926184-e5083db6-7772-4193-8246-8a7e5d10cf3a.png)


10. In the file index.js type


![image](https://user-images.githubusercontent.com/98203936/192928989-c0464f3d-4f0d-41fa-bdc3-e801cb3a8820.png)


11. Open a browser and type

![image](https://user-images.githubusercontent.com/98203936/192929147-d0467290-7355-45cd-9dee-a111b31ef3c3.png)

12. We need to refresh app type at the console Crtl + c to finish server and install with npm i nodemon -D


![image](https://user-images.githubusercontent.com/98203936/192932843-bf4ffc06-a3ce-4ea2-8687-0f24af0129c2.png)


13. Open package.json and replace 


![image](https://user-images.githubusercontent.com/98203936/192933460-1f43962d-af93-4390-b197-2e005b8714a9.png)


14. Open the terminal and type npm run dev

![image](https://user-images.githubusercontent.com/98203936/192933544-b9276e74-859b-4fff-b447-530174042a0a.png)


![image](https://user-images.githubusercontent.com/98203936/192933701-14be624c-15af-4ee1-9b0d-1acd02637c97.png)



15. Open index.js and type

![image](https://user-images.githubusercontent.com/98203936/192935601-23182da5-dc4a-40fa-9edb-1156f24be5f6.png)


![image](https://user-images.githubusercontent.com/98203936/192935651-1aa7769d-3871-48cc-a48c-7c1c864d1b6d.png)


16. Create endpoints in index.js

![image](https://user-images.githubusercontent.com/98203936/193165651-786d5549-7c64-44a0-8a50-c103ed539629.png)

17. Open a browser and type localhost:3000/employees

![image](https://user-images.githubusercontent.com/98203936/193165739-443173f4-9547-44ad-9c1a-60256efd1599.png)


18. Install Thunder Client extension  

![image](https://user-images.githubusercontent.com/98203936/193729633-fa6af3b2-7870-4c1e-8e9c-53865551199a.png)

19. Open Thunder Client and press New Request

![image](https://user-images.githubusercontent.com/98203936/193729776-9f6a7261-211b-4a67-938b-3d37dd5d5865.png)

20. Send Get request at http://localhost:3000/employees

![image](https://user-images.githubusercontent.com/98203936/193731059-d6053d7c-9168-4d14-b5ba-8dd231d840b7.png)

21. Create a new Folder db and create file database.sql 

![image](https://user-images.githubusercontent.com/98203936/193981382-259ba388-0776-42e6-9732-df4d92932ee6.png)

22. Open mysql and run the code 

![image](https://user-images.githubusercontent.com/98203936/193980372-b97cde3e-a2f9-4e6c-bdfd-4d772778b114.png)

23. Open cmd and type 

![image](https://user-images.githubusercontent.com/98203936/193982561-c78453b8-1f10-4f92-9f2a-84b75d94aba5.png)

24. Create a new folder db and create a file db.js

![image](https://user-images.githubusercontent.com/98203936/193986401-4e666bde-2c81-40df-81bc-faa260d2e5e7.png)

25. Open file index.js and type

![image](https://user-images.githubusercontent.com/98203936/193987358-1e594b97-39c9-4c26-a6e9-0ccc85757b5b.png)

26. Open http://localhost:3000/ping

![image](https://user-images.githubusercontent.com/98203936/193986600-4fd34ca8-91da-4319-9598-89be01367882.png)

27. Create a new folder routes and src, move routes into src and move index.js to src and db.js to src

![image](https://user-images.githubusercontent.com/98203936/193988667-cff66fbb-df8d-42a6-9e7a-d24cd40fbca7.png)

28. Open file package.json and type

![image](https://user-images.githubusercontent.com/98203936/193989036-8dc530e4-cde6-4e11-8853-e25413fca773.png)

29. Open cmd and type npm run dev

![image](https://user-images.githubusercontent.com/98203936/193989170-e93685aa-e3f7-4ade-8777-4694e999b3c1.png)

30. Create a new file into routes folder employees.routes.js

![image](https://user-images.githubusercontent.com/98203936/193989815-3786a2c3-59e4-40b3-b668-7c30bacc89dc.png)

31. Copy routes into index.js and paste into employees.routes.js

![image](https://user-images.githubusercontent.com/98203936/193990062-6eb366f7-1c41-409b-8dcf-7519bd25567e.png)

32. Replace app for router

![image](https://user-images.githubusercontent.com/98203936/193990619-5b17b078-947f-4538-9cde-d0f43729170d.png)

33. Open index.js and import employeesRoutes and use app.use

![image](https://user-images.githubusercontent.com/98203936/193990979-043bc219-ffe0-4e50-90d9-b1569afa3d55.png)

34. Create new file index.routes.js into routes folder, copy route and index.js

![image](https://user-images.githubusercontent.com/98203936/193992049-7fbe901c-ea2b-49c0-ba4c-1d31b4976840.png)

![image](https://user-images.githubusercontent.com/98203936/193992112-d268eb5e-6977-48f6-b498-49b327a7fb3d.png)

35. Create a new folder controllers into src and new file employees.controller.js

![image](https://user-images.githubusercontent.com/98203936/194120897-2564e07a-e24a-4a2e-b5fa-2e299771be6c.png)

36. Copy into employees.routes.js this

![image](https://user-images.githubusercontent.com/98203936/194121160-aa7a983e-8fee-411b-8c37-9bed557295fb.png)

37. Paste into employees.controller.js this

![image](https://user-images.githubusercontent.com/98203936/194121676-514291cf-6bd6-4ec7-9f3b-78948fecac28.png)

38. Open employees.roytes.js and import employees.controller.js

![image](https://user-images.githubusercontent.com/98203936/194122586-a6eccf31-c144-4ce7-9593-ab0d467af89d.png)

39. The same with the other routes

![image](https://user-images.githubusercontent.com/98203936/194128221-d6b1e294-f363-432b-8058-8ca2f8620c66.png)


![image](https://user-images.githubusercontent.com/98203936/194128352-275c3664-92d3-4e86-89c8-42891fe684b6.png)


40. 

