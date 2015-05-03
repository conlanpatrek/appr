define(
    [
        'Phaser'
    ],
    function(Phaser)
    {
        'use strict';

        return function Begin(game, gamedata) {
            var self = this,
                cGroup,
                collectibles = [],
                count = 0;

            var appNames = [
                "InputSupreme",
                "MegaWare",
                "SmartFusion",
                "RisottoLogic",
                "NodeCode",
                "DeprecatedCommand",
                "SafeQuery",
                "DeviceIcing",
                "WikiSmoked",
                "BakeSound",
                "EmulationPod",
                "KernelPeanut",
                "SystemCafe",
                "FrameWare",
                "DefaultOutput",
                "CharacterBinary",
                "OverArray",
                "SkilletColumn",
                "BlogChocolate",
                "FoldCoder",
                "ExceptionPressure",
                "PowerFruit",
                "DishProtocol",
                "TaskTemplate",
                "SoupSample",
                "MegaTag",
                "ChecksumFold",
                "AlgorithmSound",
                "GroupBoolean",
                "DynamicBase",
                "CommandMull",
                "InputDessert",
                "TeaArchitect",
                "PhoneFont",
                "PhoneGreens",
                "RepositoryDeprecated",
                "CyberSalsa",
                "ThreadArray",
                "CharacterCookie",
                "BurnerFile"
            ];


            function backToMenu(game)
            {
                game.state.start('menu');
            }

            self.update = function(game)
            {

            };

            self.render = function()
            {

            };

            self.create = function(game)
            {
                selectName();
                var name = gamedata.appName();

                var background = game.add.sprite(0, 0, 'bg_sprint');
                background.width = game.width;
                background.height = game.height;

                var esc = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
                esc.onDown.add(backToMenu);

                var title = game.add.text(game.world.centerX,
                                            game.world.centerY - 100,
                                            "Welcome to " + name + "! \n" ,
                                            { font: "50px press_start_kregular", fill: "#FCFCFC", align: "center" });
                title.anchor.setTo(0.5);

                var text = "We've got enough funding for maybe one sprint. \n" +
                "The more we can convince investers that we can \n" +
                "attract users with hot new technologies, \n" +
                "the better the odds we'll be funded. \n\n" +
                "Do you prefer RedBull or RockStar?";

                var welcome = game.add.text(game.world.centerX,
                                            game.world.centerY + 100,
                                            text,
                                            { font: "20px press_start_kregular", fill: "#FCFCFC", align: "center" });
                welcome.anchor.setTo(0.5);

                var go = game.add.text(game.world.centerX, game.world.centerY + 400,'Press SPACE to CONTINUE', { font: "15px press_start_kregular", fill: "#FCFCFC", align: "center" });
                go.anchor.setTo(0.5);
            };

            function begin()
            {
                game.state.start("Sprint");
            }

            function selectName()
            {
                var appName = appNames[Math.floor(Math.random() * appNames.length)];
                gamedata.appName(appName + ".io");
            }
        };
    }
);
