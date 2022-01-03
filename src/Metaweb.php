<?php declare(strict_types=1);

namespace Tardigrades\Metaweb;

use craft\events\ElementEvent;
use craft\services\Elements;
use craft\elements\User;
use craft\base\Plugin;
use Craft;

class Metaweb extends Plugin
{
    public function init()
    {
        parent::init();

        Craft::$app->elements->on(Elements::EVENT_AFTER_SAVE_ELEMENT, function (ElementEvent $event) {
            Craft::info(
                sprintf('AFTER: %s', get_class($event->element)), 'tardigrades'
            );
        });

        Craft::$app->elements->on(Elements::EVENT_BEFORE_SAVE_ELEMENT, function (ElementEvent $event) {
            /** @var Elements $element */
            $element = $event->element;

            Craft::info(
                sprintf('BEFORE: %s', get_class($event->element)), 'tardigrades'
            );

            if (!$event->element instanceof User) {
                return;
            }
            Craft::info(
                sprintf('This is a user. Is it new: %s', $event->isNew),
                'tardigrades'
            );
        });
    }
}
