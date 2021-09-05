---
lang: zh-CN
title: Ftrack Events Manager 事件编写
---

# 事件路径配置
事件路径配置在```ftrack_events_manager_helper.config```中，只需要配置```EVENTS_ROOTS```这个变量即可。

# 编写事件
事件可以分类函数式和类式，写完后只需要用```ftrack_events_manager_helper.subscribe```装饰一下即可。

```subscribe```装饰器有3个参数：
1. topic: 订阅项，默认为 ```ftrack.update```
2. subscriber: 订阅的信息
3. priority: 优先级，默认为 100

## 函数式事件
事件函数会接收两个参数，```session``` 和 ```event```。

同时，```ftrack_events_helper```下还提供了```logger```对象用于打印消息，并且消息会记录到数据库中，用于前端查看。

```logger```提供了：```info```/```warning```/```error```/```exception```四个方法可以使用
```python
from ftrack_events_helper import subscribe, logger

@subscribe()
def test1(session, event):
    logger.info('这是test1的log')
```

## 类式事件
类式事件需要继承```ftrack_events_helper.EventBase```这个类，这个类提供了内置的```logger```对象
```python
from ftrack_events_helper import EventBase, subscribe

@subscribe()
class Test7(EventBase):
    event_name = '事件名'  # 这个类变量可以指定事件名，如果不指定，事件名为类名
    
    # 事件入口，需要提供 event 参数
    def run(self, event):
        print(self.session)  # self.session 就是 ftrack 的 session 对象
        self.logger.warning('这是事件名的log') # 内置了 self.logger 日志输出对象
```

# 调试事件
## 调试当前文件
只需要使用```ftrack_events_helper.run_test_server```函数即可
```python
from ftrack_events_helper import subscribe, logger, run_test_server

@subscribe(priority=80)
def test1(session, event):
    logger.info('这是test1的log')

if __name__ == '__main__':
    run_test_server()
```

## 调试多个文件
只需要在需要运行的文件中设置```DEBUG=True```,然后运行```ftrack_events_helper.events_test_server.py```文件即可。

如果所有文件都不设置```DEBUG=True```,那么```ftrack_events_helper.events_test_server.py```会加载所有事件。
```python
from ftrack_events_helper import subscribe, logger, run_test_server

DEBUG = True


@subscribe(priority=80)
def test1(session, event):
    logger.info('这是test1的log')

if __name__ == '__main__':
    run_test_server()
```