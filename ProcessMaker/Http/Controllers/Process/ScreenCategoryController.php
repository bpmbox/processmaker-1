<?php

namespace ProcessMaker\Http\Controllers\Process;

use Illuminate\Support\Facades\Auth;
use ProcessMaker\Http\Controllers\Controller;
use ProcessMaker\Models\ScreenCategory;

class ScreenCategoryController extends Controller
{
    /**
     * Get list of Screen Categories
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $title = __('Screen Categories');
        $btnCreate = __('Category');
        $titleMenu = __('Screens');
        $routeMenu = 'screens.index';
        $titleModal = __('Create Screen Category');
        $fieldName = __('Category Screen Name');
        $distinctName = __('The category name must be distinct.');
        $permissions = Auth::user()->hasPermissionsFor('categories');
        $route = 'screen_categories';
        $location = '/designer/screens/categories';
        $create = 'create-categories';
        $include = 'screensCount';
        $labelCount = __('# Screens');
        $count = 'screens_count';

        return view('categories.index', compact('title', 'btnCreate', 'titleMenu', 'routeMenu', 'permissions', 'titleModal', 'fieldName', 'distinctName', 'route', 'location', 'create', 'include', 'labelCount', 'count'));
    }

    /**
     * Get a specific screen category
     *
     * @param ScreenCategory $screenCategory
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit(ScreenCategory $screenCategory)
    {
        $category = $screenCategory;
        $titleMenu = __('Categories');
        $routeMenu = 'screen-categories.index';
        $route = 'screen_categories';
        $location = '/designer/screens/categories';
        return view('categories.edit', compact('category', 'route', 'location', 'titleMenu', 'routeMenu'));
    }
}
