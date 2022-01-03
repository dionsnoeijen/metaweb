<?php declare(strict_types=1);

namespace Tardigrades\Metaweb\assetbundles;

use craft\web\AssetBundle;

class RegistrationBundle extends AssetBundle
{
    public function init()
    {
        $this->sourcePath = '@Tardigrades/Metaweb/assetbundles/resources';
        $this->js = [ 'registration.bundle.js' ];
        parent::init();
    }
}
