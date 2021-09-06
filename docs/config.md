# 配置介绍
配置文件在```ftrack_events_manager_helper.config```当中。

# 数据库配置
## DB_CONFIG
Mongodb数据库连接配置。
## DB_INFO_CONFIG
用于储存事件组信息。
## DB_LOG_CONFIG
用于储存事件所产生的log数据。

# 事件配置
## EVENTS_ROOTS
服务器会将这个变量所指向的路径下的事件遍历出来，在 ```添加事件``` 页面中显示。

# 用户配置
## DEBUG_USERS
Debug模式下，可以接受的发送过来数据的用户列表。
## FTRACK_USER_CONFIG
Ftrack事件服务器初始化 session 用的账号密码。
## FTRACK_DEBUG_USER_CONFIG
Debug模式下，初始化 session 用的账号密码。