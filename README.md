# SYLU_Togetclass

只是一个帮助大家抢课的脚本罢了。


使用教程：  
0.使用前浏览器应安装Tampermonkey插件并启用  
1.浏览器（建议使用edge等）打开教务网中的自主选课页面  
2.确认页面完全加载后，按下F12键，进入调试界面  
3.确认进入调试页面后，按control+shift+c键进入元素检查  
4.确认进入元素检查后，单击（你想选的课程）的“选课”按钮  
5.调试界面会自动转行，检查对应行并找到关键字**value="选课" oneclick=“generateMixed**('课程代码1', '课程代码2')记录并保存  
6.找到仓库里的SYLU_Togetclass.user.js文件并打开，在第8行和第21行修改参数  
7.打开Tampermonkey插件并添加新脚本，将原有代码删去，将SYLU_Togetclass.user.js文件中修改后的代码复制进去；最后确认无误，点击文件再点击保存  
8.检查脚本是否启用，最后刷新教务网的自主选课界面，检验效果  

最后，**[Hope we can get the classes we desire all](https://github.com/Endorsie/SYLU_Togetclass/assets/150823142/0ec1cb0e-a3f7-46c9-9474-1ec180f85920)**  
**<2024.3.24>**  

