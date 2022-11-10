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

40. Copy funtion into index.routes.js 

![image](https://user-images.githubusercontent.com/98203936/194129921-b263ed67-d629-416d-a168-b19c9b7f774b.png)


41. Create a new file index.controller.js into controllers folder and paste

![image](https://user-images.githubusercontent.com/98203936/194130231-a8ffa861-0b47-4fd5-8d01-b12d6cf9bb79.png)

42. Open index.routes.js and import ping

![image](https://user-images.githubusercontent.com/98203936/194130669-acefc3a9-4511-4376-8fb7-cd2e549ab2f8.png)

43. Cut pool into index.routes.js

![image](https://user-images.githubusercontent.com/98203936/194130876-e55f9bcf-ce69-4c57-b6d3-40995ebe9b6e.png)

44. Paste into index.controller.js

![image](https://user-images.githubusercontent.com/98203936/194131058-b1f7edfd-5693-488c-892c-d3703bf1a58a.png)

45. Open database.sql and paste this code on console mysql

![image](https://user-images.githubusercontent.com/98203936/194471678-cc4f2617-ef2a-416b-b4b2-01c8c74b5e7c.png)

![image](https://user-images.githubusercontent.com/98203936/194472447-fccc555d-72e9-4186-aa0f-f9c7d539dd8c.png)

46. Open employees.controller.js and import pool and type

![image](https://user-images.githubusercontent.com/98203936/200688887-c8dec2d5-6f0d-49e5-a5e1-0204d58458b9.png)

47. Open Thunderclient and select POST and Send to employees

![image](https://user-images.githubusercontent.com/98203936/200689552-4555ed9e-52d7-4138-8084-0bb8013c8a93.png)


48. Open employees.controller.js and type

![image](https://user-images.githubusercontent.com/98203936/200690011-b81462bc-8c9c-453c-b7f9-fae17e17a000.png)

 
 49. Open Thunderclient and select body, Json and type
 
 ![image](https://user-images.githubusercontent.com/98203936/200690283-a4dda8a4-9fea-430f-8993-ff50e6db291d.png)

50. Open index.js and type

![image](https://user-images.githubusercontent.com/98203936/200690593-ce792a40-c003-4dce-afb5-6bec751f621d.png)

51. Open console and Send

![image](https://user-images.githubusercontent.com/98203936/200690875-d4d336dd-6f47-4ebd-b161-a3f4e059c732.png)

52. Open employees.controller.js and type

![image](https://user-images.githubusercontent.com/98203936/200691708-4fc0e47e-8e55-4474-87fd-094eb20da226.png)

53. Open Thunderclient and select POST, send

![image](https://user-images.githubusercontent.com/98203936/200692432-8847bf0f-805f-4244-9e88-b0cb08ee01ea.png)

54. Open employees.controllers.js and type

![image](https://user-images.githubusercontent.com/98203936/200694965-174e98cb-71c5-46e8-97ab-6d5831f4ba35.png)

55. Open Thunderclient and select POST, send

![image](https://user-images.githubusercontent.com/98203936/200695207-587bcebc-0195-4a96-8337-8864dc972315.png)

56. Open employees.controller.js and type

![image](https://user-images.githubusercontent.com/98203936/200697264-47982591-ded4-46c1-9c7b-d4fffbaffe80.png)


57. Open Thunderclient and select GET, send

![image](https://user-images.githubusercontent.com/98203936/200697350-e1828646-d1ba-47c7-b046-b49322860274.png)

58. Open a browser and type localhost:3000/employees

![image](https://user-images.githubusercontent.com/98203936/200697542-077a8715-309a-4134-a647-5e64ba1bad2a.png)

59. Open employees.routes.js and type

![image](https://user-images.githubusercontent.com/98203936/200698371-9ec1bf2e-3e37-41e6-9bec-9ceb5c900e6d.png)

60. Open employees.controller.js and type

![image](https://user-images.githubusercontent.com/98203936/200698922-def02034-6a89-4fed-9179-94fe64aac234.png)

61. Open employees.routes.js and type

![image](https://user-images.githubusercontent.com/98203936/200699078-bd6da9cb-559e-444a-9973-a39d7c5616a3.png)

62. Open browser and type 

![image](https://user-images.githubusercontent.com/98203936/200699793-cc1275cf-8f8f-4f79-9f98-9c70d20d0be0.png)

63. Open employees.controller.js and type

![image](https://user-images.githubusercontent.com/98203936/200701313-2b7fcec4-b23d-42ee-811f-7744d3276be3.png)

64. Open browser and type

![image](https://user-images.githubusercontent.com/98203936/200701680-d06a530e-12d6-4cc3-b141-c9fc6c44b46c.png)

65. Open employees.controller.js and type

![image](https://user-images.githubusercontent.com/98203936/200702606-60efeb04-afba-4511-99b4-093310b2d0a6.png)

66. Open Thunderclient and select GET, send

![image](https://user-images.githubusercontent.com/98203936/200703239-975f97ff-22a9-48e1-ae34-2498949482b1.png)

67. Open employees.controller.js and type

![image](https://user-images.githubusercontent.com/98203936/201168909-3c106bfb-a8b2-41d7-be8a-e01a190b7c1a.png)

68. Open employees.routes.js and type

![image](https://user-images.githubusercontent.com/98203936/201173227-36260287-5b7a-4f88-873f-86f46802ab7a.png)

69. Open Thunderclient and select delete, send

![image](https://user-images.githubusercontent.com/98203936/201174190-9496d28c-64cc-47fb-b74c-f2d02c5bc587.png)

70. Open employees.controller.js and type 

![image](https://user-images.githubusercontent.com/98203936/201216575-8817a831-870b-4b0a-b23e-8424ffe42304.png)

71. Open Thunderclient and select Delete, send

![image](https://user-images.githubusercontent.com/98203936/201216725-9a5fb682-d06e-4d79-bdb7-be475f59e092.png)

72. Open employees.controller.js and type

![image](https://user-images.githubusercontent.com/98203936/201220130-4182031f-06f1-4137-8483-5c4c2e1317cc.png)

73. Open employees.routes.js and type

![image](https://user-images.githubusercontent.com/98203936/201220336-e9c99d39-dbce-4373-a475-6aec905e0953.png)

74. Open Thunderclient and select Put, Body and type

![image](https://user-images.githubusercontent.com/98203936/201252036-c4881055-9d73-4f04-935f-8e101622152a.png)

75. Open employees.controller.js and type

![image](https://user-images.githubusercontent.com/98203936/201253237-851918cc-3ac4-4f3c-b939-25d865bfac40.png)

76. Open Thunderclient and select Put, send

![image](https://user-images.githubusercontent.com/98203936/201253368-821aadb3-1560-4e68-823e-74335ec90a4e.png)

77. Open employees.controller.js and type

![image](https://user-images.githubusercontent.com/98203936/201253871-16c51a43-d76f-4c32-ac3d-a7b22563367a.png)

78. Open Thunderclient and select PUT, send

![image](https://user-images.githubusercontent.com/98203936/201254013-de834fca-b512-4684-8ffa-e3207ffa5709.png)

79. Open employees.controller.js and type

![image](https://user-images.githubusercontent.com/98203936/201255904-ee90d619-b551-450b-a75d-82ec6b6f304a.png)

80. Open employees.routes.js and type

![image](https://user-images.githubusercontent.com/98203936/201256055-4012f121-1874-4d9e-a05c-83b04b97c704.png)

81. Open Thunderclient select Patch, send

![image](https://user-images.githubusercontent.com/98203936/201256467-195a5a6b-39ce-4878-a031-6c48f8c6bbc0.png)

82. 

